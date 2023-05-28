import pandas as pd
import urllib.request
import os

#----------------------
def url_to_image(i,url,file_path):

    # Args: 
    # i: image index
    # url: image url
    # file_path: where to save the image


    # filename = 'image-{}.jpg'.format(i)
    filename = url.split('/')[5].split('.')[2] + '.'+url.split('.')[len(url.split('.'))-1]
    full_path = '{}{}'.format(file_path,filename)

    # urllib.request.urlretrieve(url,full_path)

    # print('{} saved.'.format(filename))
    if(os.path.isfile(full_path)):
        print('{} exists'.format(filename))
    else:
        print('{} does not exist'.format(filename))
        urllib.request.urlretrieve(url,full_path)
        print('{} is now saved.'.format(filename))
    return None

#----------------------

#set constants 
FILENAME = "imgs_urls.csv"
FILE_PATH = "images/"

#read list of urls as Pandas dataframe
urls = pd.read_csv(FILENAME)
# trial = urls.values[0][0]
# x = trial.split('/')[5].split('.')[2] + '.'+trial.split('.')[len(trial.split('.'))-1]
# print(x)

#Save images to the directory by iterating through the list
for i, url in enumerate(urls.values):
    url_to_image(i,url[0],FILE_PATH)
    # print('{} : {}'.format(i,url[0]))

