import React, { Suspense, ComponentType } from 'react'

function createSuspense<WP>(WrappedComponent: ComponentType<WP>) {
    return  (props: WP) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <WrappedComponent {...props} />
    </Suspense>
    }
}

export default createSuspense