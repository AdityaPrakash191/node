`LINUX`

`REPL` : Read Evaluate Print Loop.
It basically runs a infinite loop which constantly looks for valid command to Read Evaluate and print.

`NOTE`

For any linux command you can check its usage and different input flags it expects by running the command followed by --help.

`COMMANDS`

1.  `pwd` : this represents what is the current directory we are currently at.

2.  `ls` : you can print the content of current directory we are in. All the files and sub-directories will be printed.
    `ls -a`
    `ls -lh`

3.  `cd` : this can help you to move into a folder and move out of a folder.
    `cd ..` : if you want to jump one folder back from the current directory.
    `cd ../..` : if you want to make two jumps two folder back from the current directory.
    `cd ~` : from any directory this will help you to come back to the home directory.
    `cd directory1/directory2/` : we can move into internal subdirectories directly by seprating them with a forward slash /.

    `NOTE` :
    ~ -> this tilda refer to home directory. Ex /Users/sanketsingh.

        / -> this slash leads you to the root directory.

        `Relative path` : It describes the location of a file/folder w.r.t current folder.
        `Absolute path` : we mention the location from home directory or root directory.

         when you give absolute path of a file or folder that means you will give the whole path of that file or folder, where as in relative path you do jumps w.r.t to the current folder.

4.  `mkdir <directoryName>`: this helps to create a new folder.

5.  `touch <filename>`: we can create blank file.

6.  `cat <filename>` : prints the whole content of the file.

7.  `rm <filename>` : delete the file but not folder.

8.  `rmdir <directoryName> ` : used to delete a empty directory or folder.

9.  `rm -r <fileName>` : this -r flag enables the rm to recusively remove all the contents of the folder and then the folder itself.

10. `ls | grep python` : this will actually pass the output of ls as an input to grep, grep does a substring search of python on the output of ls.

11. `ls > new.txt` : whatever is the result of ls will be dumped into new.txt, nothing will be printed in the console. If new.txt has some content already then that will be replaced.

12. `ls >> new.txt` : whatever is the result of ls will be dumped into new.txt, nothing will be printed on the console. If new.txt has some content already then the new content will be appended.

13. `<command1> && <command2>` : this executes command1 followed by command2 considering command1 has no errors.

14. `cp file1 file2` : copies the content of the file1 to file2.

15. `mv file1 file2` : moves(cut paste) the file1 to a new position as file2. This can also help us to rename a file.

16. `tar -cf archieve.zip 1.txt 2.txt` : this command will add all the files mentioned after archive.zip into the zipped archive as mentioned.

17. `tar -zcf archive1.zip 1.txt 2.txt` : this commmand will not only add the files to the zip but also compress them.

18. `tar xf archive1.zip -C extract` : all the content of archive1 will be extracted into the extract folder.

`VIM`

1. `vim <filename` : this will create a file (if it doesn't exist) and then open it in the vim editor in the normal mode. In normal mode we can't do changes to the file but we read it and navigate it. You can also use "vi <fileName>" to do the same.

Now after opening vim if you want to start making changes you need to first of all make it change the mode from "normal" to "insert" mode. To go in the insert mode we can press i. If you want to come back to the normal mode than press esc.

2. `esc + :q` -> if you want to exit a file we can do this.

3. `esc + :q!` -> If file has some changes and we want to exit without saving changes.

4. `esc + :wq ` -> if file has changes and we want to save it and then exit.

5. `l` : in normal mode, move the cursor right.

6. `h` : move the cursor left.

7. `j` : move the cursor down.

8. `k` : move the cursor up.

   You can use normal right left up down arrow keys as well to navigate.

9. `dd` : in normal mode, it will delete the line the cursor is currently at.

10. `gg` : in normal mode it will make the cursor move to the first line.

11. `G` : in normal mode, it will move the cursor to the last line.

12. `w` : in normal mode, it can make you jump one word.

13. `2w` : in normal mode it will make you jump 2 words.

14. `d2w` : it will delete 2 words.

15. `%s/foo/bar/` : to replace all occurrences of foo with bar.

16. `yw` : in normal mode, it copies one word.

17. `yy` : in normal mode, it copies a whole line.

18. `p` : for pasting in normal mode.

19. `tail <fileName>` : this command will print few last lines from the given file.

20. `tail -n <digit> <fileName>` : here this digit tells the number of lines we want from the file.

21. `tail -f <fileName>` : this command will print somelines and doesn't exit.

22. `head -n <digit> <filename`> : this command will print the first digit lines of the file.

23. `vim ~/.vimrc` : to change the configuration of vim.
