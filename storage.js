/* storage.js — داده مشترک مجموعه پناه */

const STORAGE_KEY = 'panaah_data_v1';
const CURRENT_KEY = 'panaah_current';

function getDefaultData(){
  return {
    users: [
      {
        id: 'admin',
        username: 'sherkat',
        name: 'شرکت',
        phone: '',
        email: '',
        address: '',
        password: '09126481838',
        role: 'admin',
        joinedAt: new Date().toISOString()
      }
    ],
    appointments: []
  };
}

function loadData(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw){
    const def = getDefaultData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(def));
    return def;
  }
  try {
    const parsed = JSON.parse(raw);
    if(!parsed.users) parsed.users = [];
    if(!parsed.appointments) parsed.appointments = [];
    return parsed;
  } catch(e){
    const def = getDefaultData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(def));
    return def;
  }
}

function saveData(data){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getUsers(){ return loadData().users || []; }
function setUsers(users){
  const data = loadData();
  data.users = users;
  saveData(data);
}

function getAppointments(){ return loadData().appointments || []; }
function setAppointments(appts){
  const data = loadData();
  data.appointments = appts;
  saveData(data);
}

function getCurrentUser(){
  const raw = localStorage.getItem(CURRENT_KEY);
  if(!raw) return null;
  try { return JSON.parse(raw); } catch(e){ return null; }
}
function setCurrentUser(user){
  localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
}
function clearCurrentUser(){
  localStorage.removeItem(CURRENT_KEY);
}
