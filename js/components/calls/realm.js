////////////////////////////////////////////////////////////////////////////
//
// Copyright 2016 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

'use strict';

import Realm from 'realm';

class Calls extends Realm.Object {}
Calls.schema = {
    name: 'calls',
    primaryKey: 'id',
    properties: {
        id: 'int',
        deleted: {type: 'bool', default: false},
        topic: 'string',
       reminders: 'string',
        status: 'string',
        duration: 'string',
       creationDate: 'date',
       startDate: 'date',

    },
};

export default new Realm({schema: [Calls]});