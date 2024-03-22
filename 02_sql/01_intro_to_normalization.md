`columns` : attributes
`rows` : tuples
`functional dependency` : it defines relationship between 2 attributes (2 columns)

                         x -> y : means y is functionally dependent on x.
                         |    |
                determinant    dependent

        y depends on x, means that, for every valid value of x, we can uniquely identify y.

`Note` : using functional dependency we can achive normalization.

`super key` : set of attributes within a table that can uniquely identify a record.
there can be a multiple super keys within a table.

`candidate key ` : minimum set of attribute that can uniquely identify a record.

`composite key` : a key that consist of 2 or more than 2 attributes, that together uniquely identify a record.

`primary key` : there can be more than one candidate key, we can choose any one non-null candidate key to become primary key.

`alternate key` : all candidate keys apart from primary key are alternate key

`foreign key` : it is an attribute which is primary key in some other table.

`Prime Attribute` : attribute which are the part of Candidate key.
