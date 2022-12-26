import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands'
import { markdownKeymap } from '@codemirror/lang-markdown'
import { bracketMatching, indentOnInput } from '@codemirror/language'
import { EditorState } from '@codemirror/state'
import {
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view'

import { useEditorConfig } from '../universal/use-editor-setting'
import { codemirrorReconfigureExtension } from './extension'
import { syntaxTheme } from './syntax-highlight'
import { useCodeMirrorAutoToggleTheme } from './ui'

export const customTheme = EditorView.theme({
  '&': {
    height: '100%',
  },
})

interface Props {
  initialDoc: string
  onChange?: (state: EditorState) => void
}

export const useCodeMirror = <T extends Element>(
  props: Props,
): [Ref<T | undefined>, Ref<EditorView | undefined>] => {
  const refContainer = ref<T>()
  const editorView = ref<EditorView>()
  const {
    general: {
      setting: { autocorrect },
    },
  } = useEditorConfig()
  const { onChange } = props

  onMounted(() => {
    if (!refContainer.value) return

    const startState = EditorState.create({
      doc: props.initialDoc,
      extensions: [
        keymap.of([
          {
            key: 'Mod-s',
            run() {
              return false
            },
            preventDefault: true,
          },
          {
            key: 'Enter',
            run(ev) {
              console.log('-')

              if (autocorrect) {
                import('@huacnlee/autocorrect')
                  .then(({ format }) => {
                    const newText = format(ev.state.doc.toString())

                    ev.dispatch({
                      changes: {
                        from: 0,
                        to: ev.state.doc.length,
                        insert: newText,
                      },
                      selection: {
                        // FIXME
                        anchor: newText.length,
                      },
                    })
                  })
                  .catch(() => {
                    console.log('not support wasm')
                  })
              }
              return false
            },
          },
        ]),
        keymap.of([
          ...defaultKeymap,
          ...historyKeymap,
          ...markdownKeymap,
          indentWithTab,
        ]),

        lineNumbers(),
        highlightActiveLineGutter(),
        history(),
        indentOnInput(),
        bracketMatching(),
        highlightActiveLine(),
        EditorState.tabSize.of(2),

        syntaxTheme,

        ...codemirrorReconfigureExtension,

        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            onChange && onChange(update.state)
          }
        }),
      ],
    })

    const view = new EditorView({
      state: startState,
      parent: refContainer.value,
    })

    editorView.value = view
  })

  useCodeMirrorAutoToggleTheme(editorView)

  return [refContainer, editorView]
}
