<script type="text/javascript">
(function(){

var columns = null;

function f(){
  var cols = window.innerWidth >= 890 ? 2 : 1;
  if (columns === cols) { return; }
  columns = cols;
  // if (cols === 2) console.log('switch to multi-column');
  // else            console.log('switch to single-column');

  var posts = document.getElementById('recent-posts');
  var childNodes = posts.childNodes, i, L = childNodes.length, node, h,
      col_width, col0_y, col1_y, col1_x,
      origin = {x:0, y:0}, node_count = 0, is_col0, row0_max_y = 0;

  posts.style.position = (columns === 1) ? null : 'relative';

  for (i = 0; i !== L; ++i) {
    node = childNodes[i];
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.className === 'breaker') {
        if (columns === 1) {
          node.style.height = null;
        } else {
          node.style.height = Math.max(col0_y, col1_y) + 'px';
        }
        break;
      }
      if (columns === 1) {
        node.style.position = null;
        node.style.top = null;
        node.style.left = null;
        node.style.width = null;
        continue;
      }
      node.style.position = 'absolute';
      if (col0_y === undefined) {
        origin.x = node.offsetLeft;
        origin.y = node.offsetTop;
        col_width = node.clientWidth;
        col0_y = origin.y + node.clientHeight;
        row0_max_y = col0_y;
        node.style.top = '0px';
        node.style.left = '0px';
        node.style.width = col_width + 'px';
        //node.style.border = '1px solid red'
      } else {
        if (col1_y === undefined) {
          col1_y = origin.y + node.clientHeight;
          col1_x = origin.x + node.clientWidth;
          if (col1_y > row0_max_y) {
            row0_max_y = col1_y;
          }
          node.style.top = '0px';
          node.style.left = col1_x + 'px';
          node.style.width = col_width + 'px';
        } else {
          // node.style.position = 'absolute';
          is_col0 = (node_count % 2) === 0;
          node.style.width = col_width + 'px';
          if (is_col0) {
            node.style.left = origin.x + 'px';
            node.style.top = col0_y + 'px';
            node.setAttribute('data-height', node.clientHeight);
            col0_y += node.clientHeight;
            node.classList.add('col0');
          } else {
            node.style.left = col1_x + 'px';
            node.style.top = col1_y + 'px';
            node.setAttribute('data-height', node.clientHeight);
            col1_y += node.clientHeight;
            node.classList.add('col1');
          }
        }
      }
      ++node_count;
    }
  }
}

function setup(){
  f();
  var onresize = f;
  // var timer = null;
  // function onresize() {
  //   if (timer !== null) { return; }
  //   timer = setTimeout(function(){ timer = null; f(); }, 100);
  // }
  if (window.addEventListener) {
    window.addEventListener('resize', onresize);
  } else {
    window.attachEvent('resize', onresize);
  }
}

// if (window.addEventListener) {
//   window.addEventListener('DOMContentLoaded', setup);
// } else {
//   window.attachEvent('onload', setup);
// }

window.initFuncs.push(setup);

})();
</script>
