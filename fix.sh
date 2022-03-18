#!/bin/bash
sed -i 's#/favicon.ico#favicon.ico#g' *.html
sed -i 's#/favicon.ico#favicon.ico#g' **/*.html

sed -i 's#href="/#href="/csexpo2022/#g' *.html
sed -i 's#href="/#href="/csexpo2022/#g' **/*.html

sed -i 's#src="/images/#src="/csexpo2022/images/#g' *.html
sed -i 's#src="/images/#src="/csexpo2022/images/#g' **/*.html

sed -i 's#src="images/#src="/csexpo2022/images/#g' *.html
sed -i 's#src="images/#src="/csexpo2022/images/#g' **/*.html

sed -i 's#background:url(/images/#background:url(/csexpo2022/images/#g' **/*.css
