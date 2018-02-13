/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

const db = require('../util/cloudantDb');
var update = require('../services/stockUpdate');
var stockUpdate = new update();
const config = require('../../config');

class StockService {

  /**
   * Retrieves all the stock data and their associated articles
   * @returns {proimse} - the promise from the cloudant DB
   */
  getStocks() {
    return db.search();
  }

  /**
   * Finds the entr(y/ies) with a company of the given name
   * @param {string} companyName
   */
  getStockByCompanyName(companyName) {
    return db.getByCompanyName(companyName);
  }

  addCompany(companyName) {
    stockUpdate.run([companyName]);
  }

  getAllCompanies() {
    return config.companies;
  }

}

module.exports = new StockService();