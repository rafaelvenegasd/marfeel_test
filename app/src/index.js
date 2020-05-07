
import './assets/styles/styles.scss'
import { search } from './js/search'
import 'bootstrap'

const button = document.getElementById('btn-search');
button.addEventListener("click", search);