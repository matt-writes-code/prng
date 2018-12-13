# DATETIME - Python

The following is a list of all the format codes that the C standard (1989 version) requires, and these work on all platforms with a standard C implementation. Note that the 1999 version of the C standard added additional format codes.
<table border="1" class="docutils">
    <colgroup>
        <col width="15%">
            <col width="43%">
                <col width="32%">
                    <col width="9%">
                    </col>
                </col>
            </col>
        </col>
    </colgroup>
    <thead valign="bottom">
        <tr class="row-odd">
            <th class="head">
                Directive
            </th>
            <th class="head">
                Meaning
            </th>
            <th class="head">
                Example
            </th>
            <th class="head">
                Notes
            </th>
        </tr>
    </thead>
    <tbody valign="top">
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %a
                    </span>
                </code>
            </td>
            <td>
                Weekday as locale’s abbreviated name.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        Sun, Mon, …, Sat (en_US);
                    </div>
                    <div class="line">
                        So, Mo, …, Sa (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %A
                    </span>
                </code>
            </td>
            <td>
                Weekday as locale’s full name.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        Sunday, Monday, …, Saturday (en_US);
                    </div>
                    <div class="line">
                        Sonntag, Montag, …, Samstag (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1)
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %w
                    </span>
                </code>
            </td>
            <td>
                Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.
            </td>
            <td>
                0, 1, …, 6
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %d
                    </span>
                </code>
            </td>
            <td>
                Day of the month as a zero-padded decimal number.
            </td>
            <td>
                01, 02, …, 31
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %b
                    </span>
                </code>
            </td>
            <td>
                Month as locale’s abbreviated name.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        Jan, Feb, …, Dec (en_US);
                    </div>
                    <div class="line">
                        Jan, Feb, …, Dez (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %B
                    </span>
                </code>
            </td>
            <td>
                Month as locale’s full name.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        January, February, …, December (en_US);
                    </div>
                    <div class="line">
                        Januar, Februar, …, Dezember (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1)
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %m
                    </span>
                </code>
            </td>
            <td>
                Month as a zero-padded decimal number.
            </td>
            <td>
                01, 02, …, 12
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %y
                    </span>
                </code>
            </td>
            <td>
                Year without century as a zero-padded decimal number.
            </td>
            <td>
                00, 01, …, 99
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %Y
                    </span>
                </code>
            </td>
            <td>
                Year with century as a decimal number.
            </td>
            <td>
                0001, 0002, …, 2013, 2014, …, 9998, 9999
            </td>
            <td>
                (2)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %H
                    </span>
                </code>
            </td>
            <td>
                Hour (24-hour clock) as a zero-padded decimal number.
            </td>
            <td>
                00, 01, …, 23
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %I
                    </span>
                </code>
            </td>
            <td>
                Hour (12-hour clock) as a zero-padded decimal number.
            </td>
            <td>
                01, 02, …, 12
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %p
                    </span>
                </code>
            </td>
            <td>
                Locale’s equivalent of either AM or PM.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        AM, PM (en_US);
                    </div>
                    <div class="line">
                        am, pm (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1), (3)
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %M
                    </span>
                </code>
            </td>
            <td>
                Minute as a zero-padded decimal number.
            </td>
            <td>
                00, 01, …, 59
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %S
                    </span>
                </code>
            </td>
            <td>
                Second as a zero-padded decimal number.
            </td>
            <td>
                00, 01, …, 59
            </td>
            <td>
                (4)
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %f
                    </span>
                </code>
            </td>
            <td>
                Microsecond as a decimal number, zero-padded on the left.
            </td>
            <td>
                000000, 000001, …, 999999
            </td>
            <td>
                (5)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %z
                    </span>
                </code>
            </td>
            <td>
                UTC offset in the form +HHMM or -HHMM (empty string if the object is naive).
            </td>
            <td>
                (empty), +0000, -0400, +1030
            </td>
            <td>
                (6)
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %Z
                    </span>
                </code>
            </td>
            <td>
                Time zone name (empty string if the object is naive).
            </td>
            <td>
                (empty), UTC, EST, CST
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %j
                    </span>
                </code>
            </td>
            <td>
                Day of the year as a zero-padded decimal number.
            </td>
            <td>
                001, 002, …, 366
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %U
                    </span>
                </code>
            </td>
            <td>
                Week number of the year (Sunday as the first day of the week) as a zero padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0.
            </td>
            <td>
                00, 01, …, 53
            </td>
            <td>
                (7)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %W
                    </span>
                </code>
            </td>
            <td>
                Week number of the year 
				(Monday as the first day of
				the week) as a decimal number.
				All days in a new year
				preceding the first Monday
				are considered to be in
				week 0.
            </td>
            <td>
                00, 01, …, 53
            </td>
            <td>
                (7)
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %c
                    </span>
                </code>
            </td>
            <td>
                Locale’s appropriate date and time representation.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        Tue Aug 16 21:30:00 1988 (en_US);
                    </div>
                    <div class="line">
                        Di 16 Aug 21:30:00 1988 (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %x
                    </span>
                </code>
            </td>
            <td>
                Locale’s appropriate date representation.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        08/16/88 (None);
                    </div>
                    <div class="line">
                        08/16/1988 (en_US);
                    </div>
                    <div class="line">
                        16.08.1988 (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1)
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %X
                    </span>
                </code>
            </td>
            <td>
                Locale’s appropriate time representation.
            </td>
            <td>
                <div class="first last line-block">
                    <div class="line">
                        21:30:00 (en_US);
                    </div>
                    <div class="line">
                        21:30:00 (de_DE)
                    </div>
                </div>
            </td>
            <td>
                (1)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %%
                    </span>
                </code>
            </td>
            <td>
                A literal
                <code class="docutils literal notranslate">
                    <span class="pre">
                        '%'
                    </span>
                </code>
                character.
            </td>
            <td>
                %
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

new in python3.6

<table border="1" class="docutils">
    <colgroup>
        <col width="15%">
            <col width="43%">
                <col width="32%">
                    <col width="9%">
                    </col>
                </col>
            </col>
        </col>
    </colgroup>
    <thead valign="bottom">
        <tr class="row-odd">
            <th class="head">
                Directive
            </th>
            <th class="head">
                Meaning
            </th>
            <th class="head">
                Example
            </th>
            <th class="head">
                Notes
            </th>
        </tr>
    </thead>
    <tbody valign="top">
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %G
                    </span>
                </code>
            </td>
            <td>
                ISO 8601 year with century
				representing the year that
				contains the greater part of
				the ISO week (
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %V
                    </span>
                </code>
                ).
            </td>
            <td>
                0001, 0002, …, 2013, 2014, …, 9998, 9999
            </td>
            <td>
                (8)
            </td>
        </tr>
        <tr class="row-odd">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %u
                    </span>
                </code>
            </td>
            <td>
                ISO 8601 weekday as a decimal number where 1 is Monday.
            </td>
            <td>
                1, 2, …, 7
            </td>
            <td>
            </td>
        </tr>
        <tr class="row-even">
            <td>
                <code class="docutils literal notranslate">
                    <span class="pre">
                        %V
                    </span>
                </code>
            </td>
            <td>
                ISO 8601 week as a decimal
				number with Monday as
				the first day of the week.
				Week 01 is the week containing
				Jan 4.
            </td>
            <td>
                01, 02, …, 53
            </td>
            <td>
                (8)
            </td>
        </tr>
    </tbody>
</table>