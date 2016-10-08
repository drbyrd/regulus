<?php
// SOURCE: http://stackoverflow.com/questions/18194080/parse-text-between-2-words
// First Demo - Question

$start_limiter = 'Frame">';
$end_limiter = '</div>';
$haystack = $bodyText; // What haystack are we searching?

# Step 1. Find the start limiter's position

$start_pos = strpos($haystack,$start_limiter);
if ($start_pos === FALSE)
{
    die("Starting limiter ".$start_limiter." not found in ".$haystack);
}

# Step 2. Find the ending limiters position, relative to the start position

$end_pos = strpos($haystack,$end_limiter,$start_pos);

if ($end_pos === FALSE)
{
    die("Ending limiter ".$end_limiter." not found in ".$haystack);
}

# Step 3. Extract the string between the starting position and ending position
# Our starting is the position of the start limiter. To find the string we must take
# the ending position of our end limiter and subtract that from the start limiter
$needle = substr($haystack, $start_pos+10, ($end_pos-2)-$start_pos);

// echo $needle;

// Second Demo - Answer


// if (preg_match("/(?<=First).*?(?=Second)/s", $haystack, $result))
//    print_r($result[0]);

?>