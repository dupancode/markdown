import { markdownToHtml, markdownToText, markdownToPlainHtml } from './markdownUtils.js';

new Vue({
  el: '#app',
  data: {
    apiUrl: '',
    markdownInput: '',
    loading: false,
    error: null,
    outputContent: ''
  },
  watch: {
    apiUrl(val) {
      if (val !== '') this.markdownInput = '';
    },
    markdownInput(val) {
      if (val !== '') this.apiUrl = '';
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.error = null;
      if (this.apiUrl) {
        axios.get(this.apiUrl)
          .then(response => {
            this.outputContent = markdownToHtml(response.data);
          })
          .catch(err => {
            this.error = 'Gagal mengambil data: ' + err.message;
          })
          .finally(() => this.loading = false);
      } else if (this.markdownInput) {
        this.outputContent = markdownToHtml(this.markdownInput);
        this.loading = false;
      } else {
        this.error = 'Masukkan URL atau markdown!';
        this.loading = false;
      }
    },
    copyContent(type) {
      let textToCopy = '';
      const md = this.apiUrl ? this.outputContent : this.markdownInput;
      
      if (type === 'text') {
        textToCopy = markdownToText(md);
      } else if (type === 'htmlStyled') {
        textToCopy = `<article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">${markdownToHtml(md)}</article>`;
      } else if (type === 'htmlPlain') {
        textToCopy = `<article>${markdownToPlainHtml(md)}</article>`;
      }
      
      const temp = document.createElement('textarea');
      temp.value = textToCopy;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      alert('Disalin ke clipboard!');
    }
  }
});