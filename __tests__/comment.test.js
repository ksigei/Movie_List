/**
 * @jest-environment jsdom
 */

describe('Add and Count comments', () => {
  document.body.innerHTML = `<div>
    <div class="comment-title">
      <h3 class="comments"></h3>
    </div>
    <ul class="comments-list">
    
    </ul>
  </div>`;
  const addAndUpdateCount = (name, comment) => {
    const list = document.querySelector('.comments-list');
    const count = document.querySelector('.comments');
    const newComment = document.createElement('li');
    newComment.textContent = `<li>2022-04-20 ${name}: ${comment}</li>`;
    list.appendChild(newComment);
    count.textContent = `Comments (${list.children.length})`;
  };
  test('Add comments', () => {
    addAndUpdateCount('Onomeh', 'This show is nice');
    addAndUpdateCount('Sigie', 'Great show');
    expect(document.querySelector('.comments-list').children.length).toBe(2);
  });
  test('check comment count', () => {
    expect(document.querySelector('.comments').textContent).toBe('Comments (2)');
  });
});
