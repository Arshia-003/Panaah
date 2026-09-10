/* ============================================================
   فایل داده مشترک — مجموعه پناه
   همه‌ی صفحات از این فایل داده می‌خونن
============================================================ */

const DATA = {
  users: [
    // ادمین پیش‌فرض
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
