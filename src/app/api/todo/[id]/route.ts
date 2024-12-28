import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

type FormValues = {
  id: number;
  title: string;
  content: string;
  status: string;
}

const defaultStatus = 'notStarted'

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = await params.id;
    let todos;
    if (id) {
      // idが存在する場合、そのidに合致するタスクを取得
      todos = await prisma.todo.findUnique({
        where: { id: Number(id) }  // ここでstringからnumberに変換
      });
      console.log('特定のタスク取得完了:', todos);
    }
    // 成功レスポンスを返す
    return NextResponse.json(
      { message: 'Success', todos }, 
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating todo:', error);
    // エラーレスポンスを返す
    return NextResponse.json(
      { error: 'Failed to create todo' }, 
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    // リクエストボディからデータを取得
    const data: FormValues = await request.json()
    
    // Todoの更新
    const todo = await prisma.todo.update({
      where: {
         id: Number(params.id)
      },
      data: {
        title: data.title,
        content: data.content,
        status: data.status || defaultStatus
      }
    })

    // 成功レスポンスを返す
    return NextResponse.json(
      { message: 'Success', todo }, 
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating todo:', error)
    // エラーレスポンスを返す
    return NextResponse.json(
      { error: 'Failed to create todo' }, 
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const req = await params;
    if (!params) {
      console.log('paramsが上手く取得できていません')
    }
    // Todoの削除
    const todo = await prisma.todo.delete({
      where: {
         id: Number(req.id)
      }
    })

    // 成功レスポンスを返す
    return NextResponse.json(
      { message: 'Success', todo }, 
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating todo:', error)
    // エラーレスポンスを返す
    return NextResponse.json(
      { error: 'Failed to create todo' }, 
      { status: 500 }
    )
  }
}