var partitionLabels = function(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {        
        map.set(s[i], i);   
    }
        
    let limit = -1;
    let pastLimit = 0;
    const answer = [];
    
    for (let i = 0; i < s.length; i++) {
        limit = Math.max(limit, map.get(s[i]));
        
        if (i === limit) {
            answer.push((i + 1) - pastLimit); 
            pastLimit = i + 1;
        }
    }
        
    return answer;
};