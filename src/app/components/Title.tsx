import React from 'react'

const titleMap = {
  create: 'Todo作成',
  edit: 'Todo編集',
  show: 'Todo詳細'
};

export const Title = (props) => {

  const {category} = props;

  return (
    <div style={{padding: '5rem 0', textAlign: 'center'}}>
      <h1>
        {category === 'create' ? titleMap.create :
         category === 'edit' ? titleMap.edit :
         category === 'show' ? titleMap.show :
         ''
        }
      </h1>
    </div>
  )
}
