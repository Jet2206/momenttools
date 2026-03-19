import { useState } from 'react'
import GraphicEditor from './tools/GraphicEditor.jsx'

export default function App() {
  const [activeTool, setActiveTool] = useState(null)

  if (activeTool === 'graphic-editor') {
    return (
      <div>
        <button
          onClick={() => setActiveTool(null)}
          style={{ position:'fixed', top:12, left:12, zIndex:1000, background:'rgba(20,30,37,0.95)', border:'1px solid rgba(184,216,232,0.15)', borderRadius:4, padding:'6px 14px', cursor:'pointer', fontFamily:'Barlow Condensed,sans-serif', fontSize:'0.6rem', fontWeight:600, letterSpacing:'0.2em', color:'#75848B', textTransform:'uppercase' }}
        >
          ← All Tools
        </button>
        <GraphicEditor />
      </div>
    )
  }

  return (
    <div style={{ minHeight:'100vh', background:'#0c1014', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 24px' }}>
      <div style={{ textAlign:'center', marginBottom:56 }}>
        <div style={{ fontFamily:'Cormorant Garamond,Georgia,serif', fontSize:'2rem', fontWeight:400, letterSpacing:'0.5em', color:'#F0EBE0', textTransform:'uppercase', marginBottom:10 }}>Moment</div>
        <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'0.65rem', fontWeight:500, letterSpacing:'0.3em', color:'#75848B', textTransform:'uppercase' }}>Content Tools</div>
        <div style={{ width:40, height:1, background:'linear-gradient(90deg,transparent,#B8D8E8,transparent)', margin:'18px auto 0' }}/>
      </div>
      <button
        onClick={() => setActiveTool('graphic-editor')}
        style={{ width:280, padding:'28px 24px', textAlign:'left', cursor:'pointer', background:'#141e25', border:'1px solid rgba(184,216,232,0.1)', borderRadius:8, boxShadow:'0 8px 32px rgba(0,0,0,0.4)', transition:'border-color 0.2s, transform 0.2s' }}
      >
        <div style={{ fontSize:'1.6rem', marginBottom:14 }}>⚡</div>
        <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'1rem', fontWeight:700, color:'#F0EBE0', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Graphic Editor</div>
        <div style={{ fontFamily:'Barlow,sans-serif', fontSize:'0.8rem', fontWeight:300, color:'#75848B', lineHeight:1.65 }}>Build athlete comparison graphics with live preview. Dark and light templates.</div>
        <div style={{ marginTop:20, color:'#B8D8E8', fontSize:'0.65rem', fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase' }}>Open Tool →</div>
      </button>
      <div style={{ marginTop:56, fontFamily:'Cormorant Garamond,Georgia,serif', fontSize:'0.8rem', fontStyle:'italic', color:'rgba(184,216,232,0.2)' }}>This Is Your Moment.</div>
    </div>
  )
}
