import { standalone } from '@aws/language-server-runtimes/runtimes'
import { RuntimeProps } from '@aws/language-server-runtimes/runtimes/runtime'
import { CodeWhispererServerIAM } from '@aws/lsp-codewhisperer'

const props: RuntimeProps = {
    version: '0.1.0',
    servers: [CodeWhispererServerIAM],
    name: 'AWS CodeWhisperer',
}
standalone(props)
