/**
 * 递归生成树
 * @param data
 * @param 
 * @param T 
 * @returns 
 */
export const toTree = <T>(data: T[], pidKey: string, idKey: string) => {
    // 删除 所有 children,以防止多次调用
    data.forEach((item: T) => {
        delete (item as any).children
    });

    const map: any = {}
    data.forEach((item: T) => {
        console.log(item)
        map[(item as any)[idKey]] = item;
    });

    const val: T[] = [];

    data.forEach((item: T) => {
        const parent = map[(item as any)[pidKey]];
        console.log(parent);
        if (parent) {
            (parent.children || (parent.children = [])).push(item)
        } else {
            val.push(item)
        }
    });
    return val
}

export const listToTree = (list: any[]) => {
    //遍历整个列表
    return list.filter((cur: { id: any; children: any; pId: number; }) => {
        // 获取当前节点的子节点
        let children = list.filter((item: { pId: any; }) => item.pId === cur.id);
        if (children.length > 0) {
            console.log(cur)
            cur.children = children;
        }
        //只返回顶级节点
        return cur.pId == 0;
    });
}