import React from 'react';

export default function getRating(stars) {
  if (stars <= 0.5) {
    return (
      <>
        <i className="fas fa-star-half-alt"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 1) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 1.5) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 2) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 2.5) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 3) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 3.5) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 4) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </>
    );
  }
  if (stars <= 4.5) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
      </>
    );
  }
  if (stars <= 5) {
    return (
      <>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </>
    );
  }
}
