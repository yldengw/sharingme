import { FileUploader } from 'ng2-file-upload';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

//   // B: 初始化定义uploader变量,用来配置input中的uploader属性
//   public uploader: FileUploader = new FileUploader({
//     url: 'http://localhost:3000/ng2/uploadFile',
//     method: 'POST',
//     itemAlias: 'uploadedfile'
// });
// // C: 定义事件，选择文件
// selectedFileOnChanged(event: any) {
//     // 打印文件选择名称
//     console.log(event.target.value);
// }
// // D: 定义事件，上传文件
// uploadFile() {
//     // 上传
//     this.uploader.queue[0].onSuccess = function (response, status, headers) {
//         // 上传文件成功
//         if (status === 200) {
//             // 上传文件后获取服务器返回的数据
//             const tempRes = JSON.parse(response);
//         } else {
//             // 上传文件后获取服务器返回的数据错误
//             alert('');
//         }
//     };
//     this.uploader.queue[0].upload(); // 开始上传
// }
// fileOverBase(event) {
//   // 拖拽状态改变的回调函数
// }
// fileDropOver(event) {
//   // 文件拖拽完成的回调函数
// }
msgs: Message[];

uploadedFiles: any[] = [];

onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
}
}
