import React from 'react';
import './App.css'; // Optional: move styles here

// Sample data arrays
const courseDetails = [
  { id: 1, title: 'Angular', date: '2/8/2025' },
  { id: 2, title: 'React', date: '30/7/2025' },
];

const bookDetails = [
  { id: 1, title: 'Master React', pages: 670 },
  { id: 2, title: 'Deep Dive into Angular 11', pages: 800 },
  { id: 3, title: 'Mongo Essentials', pages: 450 },
];

const blogDetails = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', summary: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdiener', summary: 'You can install React from npm.' },
];

function App() {
  return (
    <div style={styles.container}>
      {/* Course Column */}
      <div style={styles.column}>
        <h2>Course Details</h2>
        {courseDetails.map(({ id, title, date }) => (
          <div key={id} style={styles.item}>
            <strong>{title}</strong>
            <div>{date}</div>
          </div>
        ))}
      </div>

      {/* Book Column */}
      <div style={{ ...styles.column, borderLeft: styles.divider }}>
        <h2>Book Details</h2>
        {bookDetails.map(({ id, title, pages }) => (
          <div key={id} style={styles.item}>
            <strong>{title}</strong>
            <div>{pages}</div>
          </div>
        ))}
      </div>

      {/* Blog Column */}
      <div style={{ ...styles.column, borderLeft: styles.divider }}>
        <h2>Blog Details</h2>
        {blogDetails.map(({ id, title, author, summary }) => (
          <div key={id} style={styles.item}>
            <strong>{title}</strong>
            <div><em>{author}</em></div>
            <div>{summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem',
    fontFamily: 'sans-serif',
  },
  column: {
    flex: 1,
    padding: '0 1rem',
  },
  divider: '4px solid #28a745',
  item: {
    marginBottom: '1.5rem',
  },
};

export default App;
