const set = new Set()
set.add('Bird')
set.add('Cat')
set.add('Dog')
set.add('Fish')
set.add('Horse')

// kiểm tra
console.log(set.has('Bird'))

// xóa
set.delete('Cat')

console.log(set)