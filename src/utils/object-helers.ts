export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    debugger
    return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    }
    )}