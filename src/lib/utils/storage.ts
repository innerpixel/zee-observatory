import { browser } from '$app/environment';
export function loadNote(key:string){if(!browser)return '';try{return localStorage.getItem(key)??''}catch{return ''}}
export function saveNote(key:string,value:string){if(!browser)return false;try{localStorage.setItem(key,value);return true}catch{return false}}
export function clearNote(key:string){if(!browser)return false;try{localStorage.removeItem(key);return true}catch{return false}}
