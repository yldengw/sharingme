import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // // 初始化值
  // public editorContent = '';
  // // 配置编辑器提醒文字
  // public editorConfig = {
  //   placeholder: '输入公告内容，支持html'
  // };
  // constructor() {}
  // // 触发事件 html标记语言， text文本
  // onContentChanged({ html, text }) {
  //   console.log(html, text);
  // }

  // ngOnInit() {
  // }
  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'insert content...'
  };

  constructor() {}

  onEditorBlured(data) {
    console.log('editor blur!', data);
  }

  onEditorFocused(data) {
    console.log('editor focus!', data);
  }

  onEditorCreated(data) {
    this.editor = data;
    console.log('quill is ready! this is current quill instance object', data);
  }

  onContentChanged({ data, html, text }) {
    console.log('quill content is changed!', data, html, text);
  }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
  }

}
