import React, { useState, useRef } from 'react';

const SyetemInfo: React.FC = () => {
  const client_width = document.body.clientWidth;
  const client_height = document.body.clientHeight;
  const offset_width =  document.body.offsetWidth;
  const offset_height = document.body.offsetHeight
  const avail_height =  window.screen.availHeight;
  const avail_width =  window.screen.availWidth;
  const agent = navigator.userAgent.toLowerCase();

  return (
    <div>
      <h1>当前网页和浏览器信息</h1>
      <p>网页可见区域宽：{ client_width }</p>
      <p>网页可见区域高：{ client_height }</p>
      <p>网页可见区域宽(包括边线的宽):{ offset_width } </p>
      <p>网页可见区域高(包括边线的宽):{ offset_height }</p>
      <p>屏幕可用工作区宽度：{ avail_width }</p>
      <p>屏幕可用工作区高度：{ avail_height }</p>
      <p>{ agent }</p>
    </div>
  )
}

export default SyetemInfo;
