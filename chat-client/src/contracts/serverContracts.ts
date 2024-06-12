import {
    ChatParams,
    FeedbackParams,
    FollowUpClickParams,
    InfoLinkClickParams,
    LinkClickParams,
    SourceLinkClickParams,
    TabAddParams,
    TabChangeParams,
    TabRemoveParams,
    CHAT_REQUEST_METHOD,
    TAB_ADD_NOTIFICATION_METHOD,
    TAB_CHANGE_NOTIFICATION_METHOD,
    TAB_REMOVE_NOTIFICATION_METHOD,
    READY_NOTIFICATION_METHOD,
    FOLLOW_UP_CLICK_NOTIFICATION_METHOD,
    FEEDBACK_NOTIFICATION_METHOD,
    LINK_CLICK_NOTIFICATION_METHOD,
    SOURCE_LINK_CLICK_NOTIFICATION_METHOD,
    INFO_LINK_CLICK_NOTIFICATION_METHOD,
    QUICK_ACTION_REQUEST_METHOD,
} from '@aws/language-server-runtimes-types'

export const TELEMETRY = 'telemetry/event'

export type ServerMessageCommand =
    | typeof CHAT_REQUEST_METHOD
    | typeof TAB_ADD_NOTIFICATION_METHOD
    | typeof TAB_REMOVE_NOTIFICATION_METHOD
    | typeof TAB_CHANGE_NOTIFICATION_METHOD
    | typeof READY_NOTIFICATION_METHOD
    | typeof TELEMETRY
    | typeof FOLLOW_UP_CLICK_NOTIFICATION_METHOD
    | typeof FEEDBACK_NOTIFICATION_METHOD
    | typeof LINK_CLICK_NOTIFICATION_METHOD
    | typeof SOURCE_LINK_CLICK_NOTIFICATION_METHOD
    | typeof INFO_LINK_CLICK_NOTIFICATION_METHOD
    | typeof QUICK_ACTION_REQUEST_METHOD

export interface Message {
    command: ServerMessageCommand
}

export interface ServerMessage extends Message {
    params?: ServerMessageParams
}

export type TelemetryParams = {
    name: string
    [key: string]: any
}

export type ServerMessageParams =
    | TabAddParams
    | TabChangeParams
    | TabRemoveParams
    | TelemetryParams
    | ChatParams
    | FeedbackParams
    | LinkClickParams
    | InfoLinkClickParams
    | SourceLinkClickParams
    | FollowUpClickParams
