// import { PipelineToolbar } from "./toolbar";
// import { PipelineUI } from "./ui";

// const VLogo = () => (
//   <div className="flex items-center gap-3">
//     <div className="h-10 w-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold">
//       V
//     </div>
//     <div className="text-lg font-semibold text-slate-800">VectorShift</div>
//   </div>
// );

// export default function App() {
//   return (
//     <div className="min-h-screen w-full relative overflow-hidden">
//       {/* Background gradient like screenshot */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/60 blur-3xl" />
//         <div className="absolute top-20 right-0 h-[520px] w-[520px] rounded-full bg-purple-200/50 blur-3xl" />
//         <div className="absolute bottom-0 left-1/3 h-[520px] w-[520px] rounded-full bg-pink-200/40 blur-3xl" />
//         <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
//       </div>

//       {/* Layout */}
//       <div className="relative z-10 p-4">
//         {/* Top bar */}
//         <div className="glass px-5 py-3 flex items-center justify-between">
//           <VLogo />
//           <div className="flex items-center gap-3">
//             <button className="btn">Save</button>
//             <button className="btn">Load</button>
//             <button className="btn">Settings</button>
//           </div>
//         </div>

//         <div className="mt-4 grid grid-cols-12 gap-4">
//           {/* Sidebar */}
//           <aside className="col-span-3 lg:col-span-2 glass p-4">
//             <div className="text-sm font-semibold text-slate-700 mb-3">
//               Node Library
//             </div>
//             <PipelineToolbar />
//           </aside>

//           {/* Canvas */}
//           <main className="col-span-9 lg:col-span-10 glass p-3">
//             <PipelineUI />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";

export default function App() {
  return (
    <div className="min-h-screen w-full">
      {/* Background gradient layer */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(900px_600px_at_10%_10%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(900px_600px_at_85%_20%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(900px_600px_at_55%_95%,rgba(236,72,153,0.14),transparent_60%),linear-gradient(to_bottom,#ffffff,#f8fafc,#ffffff)]" />

      {/* Top Header */}
      <header className="h-16 w-full flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          {/* V icon */}
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold">
            V
          </div>
          <div className="text-slate-900 font-semibold text-lg">VectorShift</div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white/70 hover:bg-white shadow-sm">
            Save
          </button>
          <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white/70 hover:bg-white shadow-sm">
            Load
          </button>
          <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white/70 hover:bg-white shadow-sm">
            Settings
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex gap-4 px-6 pb-6">
        {/* Sidebar */}
        <aside className="w-[280px] shrink-0">
          <div className="rounded-3xl border border-white/60 bg-white/60 backdrop-blur-md shadow-lg p-4">
            <div className="text-slate-600 text-sm font-semibold mb-3">Node Library</div>
            <PipelineToolbar />
          </div>
        </aside>

        {/* Main canvas */}
        <main className="flex-1">
          <PipelineUI />
        </main>
      </div>
    </div>
  );
}