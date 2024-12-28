import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

type FormValues = {
  id: number;
  title: string;
  content: string;
  status: string;
}

const defaultStatus = 'notStarted'

export const GET = async() => {
  try {
    // idが存在しない場合、全てのタスクを取得
    const todos = await prisma.todo.findMany();
    console.log('全タスク取得完了:', todos);
    // 成功レスポンスを返す
    return NextResponse.json(
      { message: 'Success', todos }, 
      { status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

  } catch (error) {
    console.log(error)
    // エラーレスポンスを返す
    return NextResponse.json(
      {  error: 'Failed to create todo' }, 
      { status: 500 }
    )
  }
}

// POSTメソッドとしてエクスポート
export const POST = async(request: Request) => {
  try {
    // リクエストボディからデータを取得
    const data: FormValues = await request.json()
    
    // Todoの作成
    const todo = await prisma.todo.create({
      data: {
        title: data.title,
        content: data.content,
        status: defaultStatus
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