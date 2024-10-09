var isRectangleOverlap = function(rec1, rec2) {
    const [r1x1, r1y1, r1x2, r1y2] = rec1;
    const [r2x1, r2y1, r2x2, r2y2] = rec2;
    
    // Check if one rectangle is to the left of the other.
    // If the right edge of rec1 (r1x2) is less than or 
    // equal to the left edge of rec2 (r2x1), or if the right 
    // edge of rec2 (r2x2) is less than or equal to the left 
    // edge of rec1 (r1x1), then they do not overlap horizontally.
    if (r1x2 <= r2x1 || r2x2 <= r1x1) return false;
    
    // Check if one rectangle is completely above or below the other.
    // If the top edge of rec1 (r1y2) is less than or equal to the 
    // bottom edge of rec2 (r2y1), or if the top edge of rec2 (r2y2) 
    // is less than or equal to the bottom edge of rec1 (r1y1),
    // then they do not overlap vertically.
    if (r1y2 <= r2y1 || r2y2 <= r1y1) return false;
    
    return true;
};
