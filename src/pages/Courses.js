import { useEffect } from 'react';
import Button from '../components/Button';
import PageShell from '../components/PageShell';
import { usePageMeta } from '../seo';
import { COURSES, COURSE_SKILLS, COURSES_URL } from '../site';

function Courses() {
  usePageMeta('courses');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = COURSES[0];

  return (
    <PageShell>
      <div className="page-inner section course-page">
        <div className="course-hero">
          <div>
            <span className="kicker">Bookkeeping courses</span>
            <h1 className="display">Learn bookkeeping with Ainur.</h1>
            <p className="lead">
              Practical bookkeeping education for beginners, business owners, and aspiring
              bookkeepers.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Button href={COURSES_URL}>Explore courses on Synoro Academy</Button>
            </div>
          </div>
          <img
            className="portrait"
            src="/images/ainur.jpg"
            alt="Ainur Zhunussova, instructor at Synoro Academy"
          />
        </div>

        <h2 className="display course-heading">Build practical bookkeeping skills.</h2>
        <ul className="skill-grid">
          {COURSE_SKILLS.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <section className="section-tight" aria-labelledby="instructor-title">
          <h2 id="instructor-title" className="display">
            Learn from Ainur Zhunussova.
          </h2>
          <p className="lead">
            Ainur combines hands-on accounting experience with a clear, practical approach to
            teaching bookkeeping.
          </p>
        </section>

        <article className="course-featured">
          <h2>
            <a href={course.href} target="_blank" rel="noreferrer">
              {course.title}
            </a>
          </h2>
          <p>{course.summary}</p>
          <Button href={course.href}>View course details</Button>
        </article>
      </div>
    </PageShell>
  );
}

export default Courses;
