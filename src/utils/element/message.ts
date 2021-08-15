import {ElNotification} from 'element-plus'
import {NotificationType} from "element-plus/lib/el-notification/src/notification.type";


export interface INoticeOptions {
    type: NotificationType;
    message: string;
    title: string
}

/**
 * element-ui 通知组件
 * @param options
 */
export const notice = (options: INoticeOptions) => {
    const {type, message, title} = options
    return ElNotification({
        type,
        title,
        message,
    })
}