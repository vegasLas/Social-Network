import React, { Suspense } from 'react'

const createSuspense = (Component) => {
    return  (props) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
    }
}

export default createSuspense