import React,{useState,useEffect} from 'react'
import style from './Text.module.css'

const TextSelectionToolbar = (text,setNewText) => {
    const [toolbarStyle, setToolbarStyle] = useState({ display: "none" });
    let selection;
    useEffect(() => {
        const handleSelection = () => {
            
            selection = window.getSelection();
            
            if(selection){
                setToolbarStyle({display:'none'})
            }
      if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
      const boundingRect = range.getBoundingClientRect();
      const toolbarWidth = 150;
      const toolbarHeight = 50;
      const pageWidth = document.documentElement.clientWidth;
      let toolbarX = Math.max(boundingRect.x + boundingRect.width / 2 - toolbarWidth / 2,0);
      let toolbarY = boundingRect.y - toolbarHeight - 5;
      if(toolbarY<0){
        toolbarY=-toolbarY;
      }
      console.log(toolbarY)

      //if selected text has more than just spaces
      if(!!/\S/.test(selection.toString()))
        {setToolbarStyle({
            display: "flex",
            flexDirection:'column',
            position: "absolute",
            top: `${toolbarY}px`,
            left: `${toolbarX}px`,
            width: `${toolbarWidth}px`,
            height: `${toolbarHeight}px`,
            zIndex: 999,
          });}
      }
      
    };

    document.addEventListener("selectionchange", handleSelection);
    return () => {
      document.removeEventListener("selectionchange", handleSelection);
    };
  }, [selection]);

  const handleBold = () => {
    console.log(selection.toString())
    // selection.toString().style.textTransform('bold')
  };

  const handleUnderline = () => {
    document.execCommand("underline");
  };

  const handleItalic = () => {
    document.execCommand("italic");
  };
  return (
    <div style={toolbarStyle}>
      <div className={`${style.container}`}>
        <button onClick={handleBold}>B</button>
        <button onClick={handleUnderline}>U</button>
        <button onClick={handleItalic}>I</button>
      </div>
      <div className={`${style.arrow}`}></div>
    </div>
  )
}

export default TextSelectionToolbar





