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

    const map: any = { }
    data.forEach((item: T) => {
        map[(item as any)[idKey]] = item;
    });

    const val: T[] = [];

    data.forEach((item: T) => {
        const parent = map[(item as any)[pidKey]];
        if (parent) {
            (parent.children || (parent.children = [])).push(item)
        } else {
            val.push(item)
        }
    });
    return val
}