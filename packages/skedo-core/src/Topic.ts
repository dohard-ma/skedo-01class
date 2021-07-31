export enum Topic {
  Loaded,
  EditMode,
  PropertyEditorUpdated,
  // New Event System
  Resized,
  PropertyChanged,
  GeneralMovingEvent,
  NewNodeAdded,
  NodeMoved,
  NodeChildrenChanged,
  SelectionChanged,
  AssistLinesChanged,
  MouseUpEventPass,
  MouseMoveEventPass,
  NodePropUpdated,
  
  NodeGapIndexChanged, // 仅仅用于制作Flex布局拖拽的阴影
}