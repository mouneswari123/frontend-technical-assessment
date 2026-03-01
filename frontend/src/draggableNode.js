// export const DraggableNode = ({ type, label, icon }) => {
//   const onDragStart = (event) => {
//     event.dataTransfer.setData(
//       "application/reactflow",
//       JSON.stringify({ nodeType: type })
//     );
//     event.dataTransfer.effectAllowed = "move";
//   };

//   return (
//     <div
//       className="sidebar-item cursor-grab active:cursor-grabbing"
//       draggable
//       onDragStart={onDragStart}
//     >
//       {icon}
//       <span>{label}</span>
//     </div>
//   );
// };

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType: type })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="w-full select-none cursor-grab active:cursor-grabbing"
    >
      <div className="w-full rounded-2xl border border-slate-200 bg-white/70 hover:bg-white shadow-sm px-4 py-3 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-slate-800 font-medium">{label}</div>
      </div>
    </div>
  );
};