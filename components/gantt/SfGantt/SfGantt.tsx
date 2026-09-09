import {
  GanttComponent,
  Inject,
  Edit
} from "@syncfusion/ej2-react-gantt";
import * as React from "react";
import { ISfGantt } from './types';

/**
 * Represents the SfGanttComponent component.
 *
 * @param {IGanttConfig} props - The props for the Gantt component.
 * @returns {JSX.Element} - The rendered Gantt component.
 */
export const SfGanttComponent: React.FC<ISfGantt> = React.memo((props: ISfGantt) => {
  const ganttRef = React.useRef<GanttComponent>(null);
  const toolbarOption = ['Search', 'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'ZoomIn', 'ZoomOut', 'ZoomToFit'];
  let noDataSource: boolean = false;

  //check DataSource is added or not
  noDataSource = !props.dataSource || props.dataSource.length === 0 || props.dataSource.every(item => item.name === 'val' && item.telephone1 === 'val');

  React.useEffect(() => {
    if (ganttRef.current) ganttRef.current.refresh();
  }, [props.width, props.height, props.allowFiltering, props.allowSorting])

  return (
    <>
      {!noDataSource && props.ganttConfig?.taskFields && Object.keys(props.ganttConfig?.taskFields).length > 0 && (
        <GanttComponent
          key={props.showToolbar ? "toolbar-visible" : "toolbar-hidden"}
          ref={ganttRef}
          width={props.width}
          height={props.height && props.height !== 'auto' ? props.height : '650px'}
          dataSource={props.dataSource}
          taskFields={{
            id: props.ganttConfig?.taskFields?.id,
            name: props.ganttConfig?.taskFields?.name,
            startDate: props.ganttConfig?.taskFields?.startDate,
            endDate: props.ganttConfig?.taskFields?.endDate,
            duration: props.ganttConfig?.taskFields?.duration,
            progress: props.ganttConfig?.taskFields.progress,
            parentID: props.ganttConfig?.taskFields?.parentID,
          }}
           editSettings={{
            mode: props.ganttConfig?.editSettings?.mode,
            allowAdding: props.ganttConfig?.editSettings?.allowAdding,
            allowEditing: props.ganttConfig?.editSettings?.allowEditing,
            allowDeleting: props.ganttConfig?.editSettings?.allowDeleting,
            allowTaskbarEditing: props.ganttConfig?.editSettings?.allowTaskbarEditing
          }}
        >
          <Inject services={[Edit]} />
        </GanttComponent>
      )}
      {noDataSource && props.renderNoDataSource()}
      {!noDataSource && (!props.ganttConfig?.taskFields || Object.keys(props.ganttConfig?.taskFields).length === 0) && props.renderNoConfigData()}
    </>
  );
});

SfGanttComponent.displayName = "SfGanttComponent";
