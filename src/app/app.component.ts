import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base64topdf';

  constructor() {
    this.downloadPdf('JVBERi0xLjUKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDM3MD4+c3RyZWFtCnicxZRNS8NAEIbv+RVzVNB0dvb7mDaxpsQGm7UHxUOxWpR+YPHkr7fJQavIIGTBDWxCdpfnfWd25jUZhkQacGggLJMiJNcJwaT9KwAPTzs7RRA2yeBCgEAIT8nJaXhp935tQXjYHB8S2oBwlJofJ7Fb36+Sk3E2G5WZlMJ7CHVV5HX3fQZZVUyyaT6rWwjC6hfQ3f3hveyEchIsCGMZCYjYMWOAtOBAAq10VsQAEQsiR8qg6Q0y4JHhjBbr9SPMnxcw3e9SIGmh3L5BCudwu9suuimCWas5DVkTyqrKInAM59V/jhjpk4ZB3UzLeTFryjzLoaobyKbjoioayAsYXZZXwzoUPTV4Cca4f5VA0oNUXMRJitSrvtE2CiRx5U+YYgwvmkupcjF8CK7odRwbVnIMjYdo9eUopVOnwDguYuRgs9i/7+BoEPV1qDSQ9QxWmAG6AaHonbC2zJHtXN+7p5W67Z4R7gl5NrBo/lpWHySdoJoKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9NZWRpYUJveFswIDAgNTk1IDg0Ml0+PgplbmRvYmoKNSAwIG9iagpbMSAwIFIvWFlaIDAgODUyIDBdCmVuZG9iagoyIDAgb2JqCjw8L1N1YnR5cGUvVHlwZTEvVHlwZS9Gb250L0Jhc2VGb250L0hlbHZldGljYS9FbmNvZGluZy9XaW5BbnNpRW5jb2Rpbmc+PgplbmRvYmoKNCAwIG9iago8PC9LaWRzWzEgMCBSXS9UeXBlL1BhZ2VzL0NvdW50IDEvSVRYVCgyLjEuNyk+PgplbmRvYmoKNiAwIG9iago8PC9OYW1lc1soSlJfUEFHRV9BTkNIT1JfMF8xKSA1IDAgUl0+PgplbmRvYmoKNyAwIG9iago8PC9EZXN0cyA2IDAgUj4+CmVuZG9iago4IDAgb2JqCjw8L05hbWVzIDcgMCBSL1R5cGUvQ2F0YWxvZy9QYWdlcyA0IDAgUi9WaWV3ZXJQcmVmZXJlbmNlczw8L1ByaW50U2NhbGluZy9BcHBEZWZhdWx0Pj4+PgplbmRvYmoKOSAwIG9iago8PC9Nb2REYXRlKEQ6MjAyMjAzMjgxMDU2MjAtMDUnMDAnKS9DcmVhdG9yKEphc3BlclJlcG9ydHMgTGlicmFyeSB2ZXJzaW9uIDYuMTYuMC00ODU3OWQ5MDliNzk0M2I2NDY5MGM2NWM3MWUwN2UwYjgwOTgxOTI4KS9DcmVhdGlvbkRhdGUoRDoyMDIyMDMyODEwNTYyMC0wNScwMCcpL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNDUyIDAwMDAwIG4gCjAwMDAwMDA3MjggMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwODE2IDAwMDAwIG4gCjAwMDAwMDA2OTMgMDAwMDAgbiAKMDAwMDAwMDg3OSAwMDAwMCBuIAowMDAwMDAwOTMzIDAwMDAwIG4gCjAwMDAwMDA5NjUgMDAwMDAgbiAKMDAwMDAwMTA2OCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwxMGNmNjY5MTUzZGNjMDA3ZmYyNzkyZDgzNzI1OGJmNT48ZTgxZWQ1NWQ0M2QwYzg2NGJmYzFlNTJiNGQzNDQ0OWQ+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTI3NwolJUVPRgo=','ejemplo')
  }


  downloadPdf(base64String: any, fileName: any){
console.log('hola');
    const nav = (window.navigator as any);
    if(nav && nav.msSaveOrOpenBlob){
      // download PDF in IE
      let byteChar = atob(base64String);
      let byteArray = new Array(byteChar.length);
      for(let i = 0; i < byteChar.length; i++){
        byteArray[i] = byteChar.charCodeAt(i);
      }
      let uIntArray = new Uint8Array(byteArray);
      let blob = new Blob([uIntArray], {type : 'application/pdf'});
      nav.msSaveOrOpenBlob(blob, `${fileName}.pdf`);
    } else {
      // Download PDF in Chrome etc.
      const source = `data:application/pdf;base64,${base64String}`;
      const link = document.createElement("a");
      link.href = source;
      link.download = `${fileName}.pdf`
      link.click();
    }

  }

}


