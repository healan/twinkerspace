import React from 'react';
import './Specs.css';

const Specs: React.FC = () => {
  return (
    <section className="specs">
      <div className="container">
        <div className="copyright">
          © {new Date().getFullYear()} twinker space. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Specs;