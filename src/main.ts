import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HeaderComponent from './components/Header.vue'
import Content from './components/Content.vue'
import fileInputVue from './components/fileInput.vue'
import Footer from './components/Footer.vue'

// 1. Import the components you need
import { Button , Uploader, Col, Row } from 'vant';
// 2. Import the components style
import 'vant/lib/index.css';
const app = createApp(App);
// 3. Register the components you need

app.component(Button.name, Button);
app.component("HeaderComponent", HeaderComponent);
app.component("Content", Content);
app.component("Footer",Footer);
app.component("fileInput", fileInputVue);
app.use(Uploader);
app.use(Col);
app.use(Row);
app.mount('#app')
