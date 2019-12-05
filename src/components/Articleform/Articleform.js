import React, {Component} from 'react';
import CategorySelect from '../Categorys/Categorys';
let arrayOfData = [];

const articleform = (props) => {

  return (
    <div className="section-content-block section-process">
      <div className="col-md-8 col-sm-10 text-center">
        <h2 className="section-heading">
          <span>Article Upload</span>
          </h2>
        {/* <p className="section-subheading">Because every pint of blood can save a life. India faces fatal accidents
          <span className="highlightme">6 times higher</span>
          than other countries...</p> */}
      </div>
      <div className="row">
        <div className="col-md-2"/>
        <div className="col-md-8 appointment-form-wrapper text-center clearfix">
          <form onSubmit={props.submitted} className="appoinment-form" name="articleForm">
            <div className="form-group col-md-8">
              <input
                required
                name="title"
                className="form-control"
                placeholder="Titel"
                type="text"/>
            </div>
            <div className="form-group col-md-8">
              <div className="select-style">
                <CategorySelect arrayOfData={arrayOfData}/>
              </div>
            </div>
            <div className="form-group col-md-8">
              <textarea name="textarea" className="form-control" placeholder="Text"/>
            </div>
            

            <div className="form-group col-md-8 col-sm-10 col-xs-10">
              <button className="btn-submit">Beitrag speichern</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default articleform;