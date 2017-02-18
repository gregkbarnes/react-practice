import Sortmate from './components/librarygrid/Sortmate.js';
import React from 'react';

var createSortmate = function(componentType, nodeNumber){
  if (componentType = "sortmate") {
    var grid = document.getElementById('library-grid');
    grid.appendChild({Sortmate})
  }
  else {
    return false;
  }
}

export default createSortmate;
