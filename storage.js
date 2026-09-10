/* ============================================================
   توابع مشترک — همه‌ی صفحات از اینا استفاده می‌کنن
============================================================ */

const STORAGE_KEY = 'panaah_data_v1';

/* خواندن کل داده */
function loadData(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  } catch(e){}
  // اگه چیزی نبود، دیتای پیش‌فرض
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

/* ذخیره کل داده */
function saveData(data){
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(e){}
}

/* دسترسی سریع */
function getUsers(){
  return loadData().users || [];
}
function getAppointments(){
  return loadData().appointments || [];
}
function getCurrentUser(){
  try {
    const raw = localStorage.getItem('panaah_current');
    return raw ? JSON.parse(raw) : null;
  } catch(e){ return null; }
}
function setCurrentUser(user){
  localStorage.setItem('panaah_current', JSON.stringify(user));
}
function clearCurrentUser(){
  localStorage.removeItem('panaah_current');
}

/* بروزرسانی کاربران */
function setUsers(users){
  const data = loadData();
  data.users = users;
  saveData(data);
}

/* بروزرسانی نوبت‌ها */
function setAppointments(appts){
  const data = loadData();
  data.appointments = appts;
  saveData(data);
}

/* دیتای پیش‌فرض */
const DEFAULT_DATA = {
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

/* اگه اولین باره، دیتای پیش‌فرض رو ذخیره کن */
(function init(){
  if(!localStorage.getItem(STORAGE_KEY)){
    saveData(DEFAULT_DATA);
  }
})();
