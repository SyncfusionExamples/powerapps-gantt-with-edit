/**
 * Build-time stub for @syncfusion/ej2-richtexteditor.
 *
 * Why this exists:
 * `@syncfusion/ej2-gantt` statically imports twelve RichTextEditor symbols in
 * `src/gantt/actions/dialog-edit.js` to render the "Notes" tab of the add/edit
 * dialog. That import lives only in the Edit module, and it drags in the whole
 * RTE dependency cluster (richtexteditor + filemanager + interactive-chat +
 * markdown-converter) -- roughly 4 MB of ES modules, which alone pushes the PCF
 * bundle past the 5 MB limit enforced by pcf-1045.
 *
 * The Notes tab is unreachable in this control: `dialog-edit.js` only creates it
 * when `taskFields.notes` is mapped, and SfGantt.tsx never maps `notes` (no
 * manifest property exposes it either). Webpack still cannot drop the package,
 * because `RichTextEditor.Inject(...)` is a real static reference and so
 * survives tree shaking despite ej2-gantt declaring `"sideEffects": false`.
 *
 * Aliasing the package to this stub (see webpack.config.js) removes it from the
 * bundle with no loss of reachable functionality.
 *
 * If the Notes feature is ever wanted, delete the alias in webpack.config.js
 * rather than filling this stub in -- and expect the bundle to exceed 5 MB again.
 */

function unreachable() {
  throw new Error(
    "@syncfusion/ej2-richtexteditor is stubbed out to keep the PCF bundle under " +
    "5 MB. The Gantt Notes tab is not supported by this control. To enable it, " +
    "remove the ej2-richtexteditor alias from components/gantt/webpack.config.js."
  );
}

/** Stands in for RichTextEditor and each of its injectable modules. */
function RichTextEditorStub() {
  unreachable();
}

// `Inject` is a static on the real RichTextEditor; keep it callable and inert.
RichTextEditorStub.Inject = function Inject() { /* no-op */ };
RichTextEditorStub.prototype.appendTo = unreachable;
RichTextEditorStub.prototype.destroy = unreachable;
RichTextEditorStub.prototype.refresh = unreachable;

// The twelve bindings imported by ej2-gantt/src/gantt/actions/dialog-edit.js.
export const RichTextEditor = RichTextEditorStub;
export const Toolbar = RichTextEditorStub;
export const Link = RichTextEditorStub;
export const HtmlEditor = RichTextEditorStub;
export const QuickToolbar = RichTextEditorStub;
export const Count = RichTextEditorStub;
