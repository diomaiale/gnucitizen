/**
 *    worker.reporter.js
 *    Copyright (C) 2009  Petko D (pdp) Petkov (GNUCITIZEN)
 *    
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *   
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *   
 *   You should have received a copy of the GNU General Public License
 *   along with this program; if not, write to the Free Software
 *   Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 **/

/**
 * IMPORT SCRIPTS
 **/
importScripts('lib.reporter.js');

/**
 * REPORTER
 **/
var reporter = new reporter.Reporter();

/**
 * REPORTER ONMESSAGE
 **/
reporter.onmessage = function (message) {
	postMessage(message);
};

/**
 * ONMESSAGE
 **/
var onmessage = function (event) {
	if (event.data.message_type == 'initiate') {
		if (event.data.message == undefined) {
			throw 'no message provided';
		}
		
		reporter.initiate(event.data.message);
	} else {
		throw 'unknown message';
	}
};

/* by Petko D. (pdp) Petkov
 * GNUCITIZEN
 **************************/