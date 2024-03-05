import React from 'react'
import { Button, Result } from 'antd'
import { RouteNames } from '../../router/router'
import { useNavigate } from 'react-router-dom'

const PageNotExist = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="no-header-container">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={() => navigate(RouteNames.LANDING)}>
              Back Home
            </Button>
          }
        />
      </div>
    </>
  )
}

export default PageNotExist
