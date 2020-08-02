import React, { Suspense } from 'react'
type PropsType = {

}
function createSuspense<WCP>  (Component) {
    return  (props) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
    }
}

export default createSuspense