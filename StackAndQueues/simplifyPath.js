var simplifyPath = function(path) {
    const parts = path.split('/');
    const stack = [];

    for (let part of parts) {
        if (part === '' || part === '.') {
            continue;
        }
        if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
};
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
