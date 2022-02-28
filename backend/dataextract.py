import json
import sqlite3
from datetime import datetime

def extract_courses():
    db=sqlite3.connect('database.sqlite3')
    with open(r'C:\Users\BIZZY\Documents\Nuom\fullstack-test\backend\initial data\courses.json', encoding='utf-8-sig') as json_file:
        json_data = json.loads(json_file.read())

        columns = []
        column = []
        columns.append("id")
        for data in json_data:
            column = list(data.keys())
            for col in column:
                if col not in columns:
                    columns.append(col)

        value = []
        values = []
        id = 1
        for data in json_data:
            for i in columns:
                if i == "id":
                    value.append(id)
                    id = id + 1
                else:
                    value.append(str(dict(data).get(i)))
            values.append(list(value))
            value.clear()

        create_query = "create table if not exists course ({0})".format(" text,".join(columns))
        insert_query = "insert into course ({0}) values (?{1})".format(",".join(columns), ",?" * (len(columns)-1))
        print("insert started: " + str(datetime.now()))
        c = db.cursor()
        c.execute(create_query)
        c.executemany(insert_query , values)
        values.clear()
        db.commit()
        c.close
        print("insert completed: " + str(datetime.now()))

def extract_locations():
    db=sqlite3.connect('database.sqlite3')
    with open(r'C:\Users\BIZZY\Documents\Nuom\fullstack-test\backend\initial data\locations.json', encoding='utf-8-sig') as json_file:
        json_data = json.loads(json_file.read())

        columns = []
        column = []
        columns.append("id")
        for data in json_data:
            column = list(data.keys())
            for col in column:
                if col not in columns:
                    columns.append(col)

        value = []
        values = []
        id = 1
        for data in json_data:
            for i in columns:
                if i == "id":
                    value.append(id)
                    id = id + 1
                else:
                    value.append(str(dict(data).get(i)))
            values.append(list(value))
            value.clear()

        create_query = "create table if not exists location ({0})".format(" text,".join(columns))
        insert_query = "insert into location ({0}) values (?{1})".format(",".join(columns), ",?" * (len(columns)-1))
        print("insert started: " + str(datetime.now()))
        c = db.cursor()
        c.execute(create_query)
        c.executemany(insert_query , values)
        values.clear()
        db.commit()
        c.close
        print("insert completed: " + str(datetime.now()))

def extract_trainers():
    db=sqlite3.connect('database.sqlite3')
    with open(r'C:\Users\BIZZY\Documents\Nuom\fullstack-test\backend\initial data\trainers.json', encoding='utf-8-sig') as json_file:
        json_data = json.loads(json_file.read())

        columns = []
        column = []
        columns.append("id")
        for data in json_data:
            column = list(data.keys())
            for col in column:
                if col not in columns:
                    columns.append(col)

        value = []
        values = []
        id = 1
        for data in json_data:
            for i in columns:
                if i == "id":
                    value.append(id)
                    id = id + 1
                else:
                    value.append(str(dict(data).get(i)))
            values.append(list(value))
            value.clear()

        create_query = "create table if not exists trainer ({0})".format(" text,".join(columns))
        insert_query = "insert into trainer ({0}) values (?{1})".format(",".join(columns), ",?" * (len(columns)-1))
        print("insert started: " + str(datetime.now()))
        c = db.cursor()
        c.execute(create_query)
        c.executemany(insert_query , values)
        values.clear()
        db.commit()
        c.close
        print("insert completed: " + str(datetime.now()))

